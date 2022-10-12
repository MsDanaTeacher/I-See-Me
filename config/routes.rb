Rails.application.routes.draw do
  resources :book_collections, only: [:index, :show]
  resources :user_books
  resources :follows
  resources :users
  
  post '/users/:id/follow', to: "users#follow"
  post '/users/:id/unfollow', to: "users#unfollow"
end
