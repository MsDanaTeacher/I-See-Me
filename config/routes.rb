Rails.application.routes.draw do
  resources :book_collections
  resources :user_books
  resources :follows
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
