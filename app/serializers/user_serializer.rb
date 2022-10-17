class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :grade, :email, :username, :password
  has_many :book_collections, through: :user_books
end
