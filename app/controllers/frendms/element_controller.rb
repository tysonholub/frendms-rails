module Frendms
  class ElementController < ::ApplicationController
  
    def get_elements
      e = Element.all.where(['page = ? OR page = "footer"', params[:page]])
      respond_to do |format|
        format.json { render :json => e.to_json(:only => [:elementId, :text]) }
      end
    end
  
    def update_element
      if user_signed_in?
        e = Element.where(['elementId = ?', params[:id]]).first
      
        if(params[:text].length > 0)
          if e.nil?
            e = Element.new
            e.page = params[:page]
            e.elementId = params[:id]
          end
          e.text = params[:text]
          e.save
        
          respond_to do |format|
            format.json { render :json => e.to_json }
          end
        else
          e.delete
        end
      end
    end
    
  end
end