class UserBook < ApplicationRecord
    has_many :users
    belongs_to :book_collections
    
end
