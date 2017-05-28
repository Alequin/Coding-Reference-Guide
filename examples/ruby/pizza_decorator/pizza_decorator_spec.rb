require("minitest/autorun")
require("minitest/rg")
require_relative("pizza_decorator.rb")

class TestPizzaDecorator < Minitest::Test

  def test_pizza_base_stonebake__get_description
    result = get_pizza_base(0).get_description()
    assert_equal("Stonebake Pizza", result)
  end

  def test_pizza_base_deep_pan__get_description
    result = get_pizza_base(1).get_description()
    assert_equal("Deep Pan Pizza", result)
  end

  def test_pizza_base_stonebake__get_cost
    result = get_pizza_base(0).get_cost()
    assert_equal(4, result)
  end

  def test_pizza_base_deep_pan__get_cost
    result = get_pizza_base(1).get_cost()
    assert_equal(6, result)
  end

  def test_pizza_base_stonebake_with_sweetcorn__get_description
    result = get_stonebake_with_sweetcorn().get_description()
    assert_equal("Stonebake Pizza with: sweetcorn", result)
  end

  def test_pizza_base_stonebake_with_sweetcorn__get_cost
    result = get_stonebake_with_sweetcorn().get_cost()
    assert_equal(6, result)
  end

  def test_pizza_base_deep_pan_with_sweetcorn_chorizo__get_description
    result = get_stonebake_with_sweetcorn_chorizo().get_description()
    assert_equal("Deep Pan Pizza with: sweetcorn chorizo", result)
  end

  def test_pizza_base_deep_pan_with_sweetcorn_chorizo__get_cost
    result = get_stonebake_with_sweetcorn_chorizo().get_cost()
    assert_equal(11, result)
  end

end
