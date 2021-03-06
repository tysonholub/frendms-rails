module Frendms
  class ElementController < ::ApplicationController

    def get_elements
      e = Element.where('frender = ?', params[:frender])
      respond_to do |format|
        format.json { render :json => e.to_json(:only => [:elementId, :elementIndex, :text]) }
      end
    end

    def update_element
      if user_signed_in?
        e = Element.find_by(:elementId => params[:id], :elementIndex => params[:index], :frender => params[:frender])

        if(params[:text].length > 0)
          if e.nil?
            e = Element.new
            e.frender = params[:frender]
            e.elementId = params[:id]
            e.elementIndex = params[:index]
          end
          e.text = params[:text]
          e.save

          respond_to do |format|
            format.json { render :json => e.to_json }
          end
        else
          if not e.nil?
            e.delete
            respond_to do |format|
              format.json { render :json => { 'resp' => "deleted element record for element id '#{params[:id]}'" } }
            end
          else
            respond_to do |format|
              format.json { render :json => { 'resp' => 'nothing to do' } }
            end
          end
        end
      else
        respond_to do |format|
          format.json { render :json => { 'error' => 'you must be logged in to commit changes' } }
        end
      end
    end

  end
end
