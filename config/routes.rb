Rails.application.routes.draw do
  get '/element/all' => 'element#get_elements'
  put '/element/update' => 'element#update_element'
end