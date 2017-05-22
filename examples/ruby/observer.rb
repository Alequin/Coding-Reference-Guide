module Subject

  def initialize()
    @observers = Array.new
  end

  def register_observer(observer)
    @observers.push(observer)
  end

  def remove_observer(observer)
    @observers.delete(observer)
  end

  def remove_all_observers()
    @observers.clear
  end

  def notify_observers()
    @observers.each{ |observer|
      observer.update(@number)
    }
  end
end

class Dealer
  include Subject

  def initialize()
    super()
    @number = rand(5)+1
  end

  def name_players()
    @observers.each{ |player|
      puts "#{player.player_id} is ready"
    }
  end

  def pick_card()
    @number = rand(5)+1
  end
end

class Player

  attr_reader :player_id

  @@id_count = 0

  def initialize()
    @@id_count += 1
    @player_id = @@id_count
    @winning_number = rand(5) + 1
  end

  def update(new_number)
    if(new_number == @winning_number)
      puts "Player #{@player_id} wins!"
    else
      puts "Player #{@player_id} lost."
    end
  end

end

# Set up dealer and 10 people
dealer = Dealer.new
people = Array.new
10.times{ |num|
  people.push(Player.new)
}

loop{
  # People have a 50% chance of sitting at the table / becoming an observer
  people.each{ |person|
      if(rand(2) == 0)
        dealer.register_observer(person)
      else
        dealer.remove_observer(person)
      end
  }

  dealer.name_players()
  # The dealer picks a new card / the subjects state changes
  dealer.pick_card()
  # All people who are sat at the table see the result / the observers are updated
  dealer.notify_observers()
  puts "----------------------------------"
  # Everyone leaves the table / stops being an observer
  dealer.remove_all_observers()
  sleep 3
}
