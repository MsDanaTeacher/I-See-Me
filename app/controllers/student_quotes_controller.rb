class StudentQuotesController < ApplicationController
    
    def create
        student_quote = StudentQuote.create(student_quote: params[:student_quote], user_book_id: params[:user_book_id])
        render json: student_quote, status: :created
    end

    def update
        update_quote = StudentQuote.find(params[:id])
        update_quote.update!(student_quote_params)
        render json: update_quote
    end

    def destroy
        destroy_quote = StudentQuote.find(params[:id])
        destroy_quote.destroy
        head :no_content
    end

    private

    def student_quote_params
        params.permit(:student_quote, :user_book_id)
    end
end
