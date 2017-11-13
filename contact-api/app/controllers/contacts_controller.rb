class ContactsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        json_response(Contact.all)
    end

    def create
        Contact.create(contact_params)
        json_response(Contact.all)
    end

    def update
        @contact = Contact.find(params[:id])
        @contact.update_attributes(contact_params)
        json_response(Contact.all)
    end

    def destroy
        Contact.destroy(params[:id])
        json_response(Contact.all)
    end

    private

    def contact_params
        params.require(:contact).permit(:id, :firstName, :lastName, :phone, :email, :picture, :tags, :favourite)
    end
end
