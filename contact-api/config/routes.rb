Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/contacts', to: 'contacts#index'

  post '/contacts', to: 'contacts#create'

  put '/contacts/:id', to: 'contacts#update'

  delete '/contacts/:id', to: 'contacts#destroy'

end
