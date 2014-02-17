class SearchController < ApplicationController
  # one page to rule them all,
  # one page to find them;
  # one page to bring them all
  # and in the darkness bind them.

  def index

  end

  def create
    Search.yelp(params['keyword'])
    binding.pry
  end

  def show

  end

end
