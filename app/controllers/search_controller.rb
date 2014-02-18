class SearchController < ApplicationController
  # one page to rule them all,
  # one page to find them;
  # one page to bring them all
  # and in the darkness bind them.

  #turn off authentication for the iOS
  skip_before_filter :verify_authenticity_token, :if => Proc.new { |c| c.request.format == 'application/json' }

  def create
    # binding.pry
    search_response = Search.yelp(params['keyword'])
    # binding.pry
    render json: search_response
  end

end
