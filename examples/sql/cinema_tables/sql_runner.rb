require("pg")

class SqlRunner

  def SqlRunner.run(sql_command)
    begin
      db = PG.connect({dbname: 'pizza_shop', host: 'localhost'})
      result = db.exec(sql_command)
    ensure
      db.close()
    end
    return result
  end

end
