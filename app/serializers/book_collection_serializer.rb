class BookCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :subject, :image, :banned, :link, :description
end
