class DiscussionQuestionsController < ApplicationController
    def create
        discussion_question = DiscussionQuestion.create(discussion_question: params[:discussion_question], user_book_id: params[:user_book_id])
        render json: discussion_question, status: :created
    end

    def update
        update_book = DiscussionQuestion.find(params[:id])
        update_book.update!(discussion_question_params)
        render json: update_book
    end

    def destroy
        destroy_book = DiscussionQuestion.find(params[:id])
        destroy_book.destroy
        head :no_content
    end

    private

    def discussion_question_params
        params.permit(:discussion_question, :user_book_id)
    end
end
