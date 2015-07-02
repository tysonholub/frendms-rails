Rails.application.routes.draw do
  get '/element/all' => 'frendms/element#get_elements'
  put '/element/update' => 'frendms/element#update_element'
end