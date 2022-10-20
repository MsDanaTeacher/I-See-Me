class StudentWorksController < ApplicationController
    def create
        student_work = StudentWork.create(student_work: params[:student_work], user_book_id: params[:user_book_id])
        render json: student_work, status: :created
    end

    def destroy
        destroy_student_work = StudentWork.find(params[:id])
        destroy_student_work.destroy
        head :no_content
    end

end
