Rails.application.routes.draw do
  resources :book_collections, only: [:index, :show]
  resources :user_books
  resources :follows

  resources :users
  
  get '/userbooks', to: 'user_books#index'
  post '/newuserbook', to: 'user_books#create'
  get '/collection', to: 'book_collections#index'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'users#login'
  post '/logout', to: 'users#logout'

  
  
  post '/users/:id/follow', to: "users#follow"
  post '/users/:id/unfollow', to: "users#unfollow"
end
