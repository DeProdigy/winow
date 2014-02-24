class Search < ActiveRecord::Base

  def self.yelp(keyword, latitude, longitude)
    # binding.pry
    consumer_key = ENV['YELP_CONSUMER_KEY']
    consumer_secret = ENV['YELP_CONSUMER_SECRET']
    token = ENV['YELP_TOKEN']
    token_secret = ENV['YELP_TOKEN_SECRET']

    api_host = 'api.yelp.com'

    consumer = OAuth::Consumer.new(consumer_key, consumer_secret, {:site => "http://#{api_host}"})
    access_token = OAuth::AccessToken.new(consumer, token, token_secret)

    path = "/v2/search?term=#{keyword}&sort=2&limit=3&location=New+York&cll=#{latitude},#{longitude}"

    response = access_token.get(path).body
    JSON.parse(response)
  end

end