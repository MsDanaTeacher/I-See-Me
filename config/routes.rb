Rails.application.routes.draw do
  resources :student_works
  resources :student_quotes
  resources :discussion_questions
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
  delete '/deleteuserbook/:id', to: 'user_books#destroy'
  patch '/updateuserlesson/:id', to: 'user_books#update'
  # get '/allfollows/:id', to: 'follows#show'
  get '/followeeinformation/:id', to: 'users#showfollowee'
  get '/user_books/:id/:bookid', to: 'user_books#followee_user_books'
  get '/book_collections_filtered', to: 'book_collections#unowned_books'
end
