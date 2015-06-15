module API
  module V1
    class Urls < Grape::API
      helpers API::V1::Helpers::Shared

      resource :urls do
        get do
          if params[:url].nil?
            {'error' => 'please provide an url, you can send like ?url=http://tinyurl'}
          else
            tiny_url = get_tiny_url(params[:url])
            puts "tiny_url => #{tiny_url}"
            {'tiny_url' => tiny_url, 'long_url' => params[:url]}
          end
        end
      end
    end
  end
end