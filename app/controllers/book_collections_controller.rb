class BookCollectionsController < ApplicationController
    
    def index
        render json: BookCollection.all
    end

    def show
        render json: BookCollection.find(params[:id])
    end

end
