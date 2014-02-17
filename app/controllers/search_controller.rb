class SearchController < ApplicationController
  # one page to rule them all,
  # one page to find them;
  # one page to bring them all
  # and in the darkness bind them.

  def index

  end

  def create
    #turn off authenticity
    skip_before_filter  :verify_authenticity_token
    # binding.pry
    search_response = Search.yelp(params['keyword'])
    # binding.pry
    render json: search_response
  end

  def show
  end

end
