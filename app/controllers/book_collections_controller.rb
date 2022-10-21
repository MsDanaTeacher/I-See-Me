class BookCollectionsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    def index
        render json: BookCollection.all
    end

    def show
        render json: BookCollection.find(params[:id])
    end

end
