class Search < ActiveRecord::Base

  def self.yelp(keyword)
    # # binding.pry
    # # construct a client instance
    # client = Yelp::Client.new
    # # binding.pry
    # include Yelp::V1::Review::Request
    # # perform an address/location-based search for cream puffs nearby
    # request = Location.new(
    #   :address => '650 Mission St',
    #   :city => 'San Francisco',
    #   :state => 'CA',
    #   :radius => 2,
    #   :term => keyword)
    # @response = client.search(request)
    # # binding.pry

    consumer_key = ENV['YELP_CONSUMER_KEY']
    consumer_secret = ENV['YELP_CONSUMER_SECRET']
    token = ENV['YELP_TOKEN']
    token_secret = ENV['YELP_TOKEN_SECRET']

    api_host = 'api.yelp.com'

    consumer = OAuth::Consumer.new(consumer_key, consumer_secret, {:site => "http://#{api_host}"})
    access_token = OAuth::AccessToken.new(consumer, token, token_secret)

    path = "/v2/search?term=food&categories=#{keyword}&location=brooklyn"

    response = access_token.get(path).body
    p JSON.parse(response)
end

end