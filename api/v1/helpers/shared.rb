module API
  module V1
    module Helpers
      module Shared

        def get_tiny_url(long_url)
          puts "long_url => #{long_url}"
          begin
            result_url = HTTParty.get('http://tinyurl.com/api-create.php?url='+long_url)
            puts "result_url => #{result_url}"
          rescue
            result_url = long_url
          end
          result_url
        end
      end
    end
  end
end