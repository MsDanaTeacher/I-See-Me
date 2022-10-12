class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :email, :username, :password
end
