require "test_helper"

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get hello" do
    get dashboard_links_url
    assert_response :success
  end
end
