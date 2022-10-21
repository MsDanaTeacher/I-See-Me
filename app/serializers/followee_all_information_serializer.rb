class FolloweeAllInformationSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :grade, :image
  has_many :book_collections
  has_many :user_books
  
end
