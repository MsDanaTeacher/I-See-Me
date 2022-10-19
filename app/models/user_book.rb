class UserBook < ApplicationRecord
    belongs_to :user
    belongs_to :book_collection
    has_many :discussion_questions
    
    validates :book_collection_id, uniqueness: { scope: :user_id }
end
