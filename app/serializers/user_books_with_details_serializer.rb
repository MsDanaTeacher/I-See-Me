class UserBooksWithDetailsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id, :book_collection_id, :discussion_questions, :student_anecdotes
  # has_one :book_collection
end
