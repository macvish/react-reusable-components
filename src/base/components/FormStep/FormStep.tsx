import React from 'react'
import { CheckOutlined } from '@ant-design/icons'

import { Button, Card } from '../'

export interface FormStepProps {
  currentForm: number
  content: {
    id: number
    title: string
    formTitle?: string
    formDescription?: string
    form: React.ReactNode
  }[]
  handleNextButton: (event?: any) => void
  handlePreviousButton: (event?: any) => void
  handleSubmitButton: (event?: any) => void
}

export const FormStep: React.FC<FormStepProps> = ({ currentForm, content, handleNextButton, handlePreviousButton, handleSubmitButton }) => {
  const displayFormInfo = (id: number) => {
    if (id === 1) {
      return <div className="only-mobile">
        <h2>About Your Company</h2>
        <p>Details about your business and its service category</p>
      </div>
    }
    else if (id === 2) {
      return <div className="only-mobile">
        <h2>Personal Contact Info</h2>
        <p>Please provide a contact's detail.</p>
      </div>
    }

    else {
      return <div className="only-mobile">
        <h2>Membership Plan</h2>
        <p>Select a membership plan.</p>
      </div>
    }
  }

  const displayFormComponent = (id: number) => {
    const formId = content[id - 1].id
    if (id === formId) {
      return content[id - 1].form
    }
  }

  const displayActionButtons = (id: number) => {
    if (id === 1) {
      return <div className="flex justify-content-end">
        <Button
          title="Next"
          type="primary"
          className="btn mt-2"
          size="large"
          onClick={() => handleNextButton()}
        />
      </div>
    } else if (id === content.length) {
      <div className="step-form-btn-wrapper">
        <Button
          title="Previous Step"
          type="ghost"
          className="btn mt-2 btn-clear"
          size="large"
          onClick={() => handlePreviousButton()}
        />

        <Button
          title="Join Us"
          htmlType="submit"
          type="primary"
          className="btn mt-2"
          size="large"
        />
      </div>
    }

    else {
      <div className="step-form-btn-wrapper">
        <Button
          title="Previous Step"
          type="ghost"
          className="btn mt-2 btn-clear"
          size="large"
          onClick={() => handlePreviousButton()}
        />

        <Button
          title="Next"
          type="primary"
          className="btn mt-2"
          size="large"
          onClick={() => handleNextButton()}
        />
      </div>
    }

  }

  return (
    <div className="step-form-container">
      <div className="step-form-wrapper">
        <Card className="step-form-helper col-5">
          <div className="only-web">
            <h3>Get On Board!</h3>
            <p>Please, provide the following information to join the NEZ community.</p>
          </div>
          <div className="step-form-helper-wrapper">
            <div className={`${currentForm === 1 ? 'step-form-helper-current' : 'step-form-helper-done'}`}>
              <span className="">{currentForm === 1 ? 1 : <CheckOutlined className="color-white"/>}</span>
              <span className="ml-3 only-web">Business Details</span>
            </div>

            <div className={`${currentForm === 2 ? 'step-form-helper-current' : (currentForm === 1 ? 'step-form-helper-inactive' : 'step-form-helper-done')}`}>
              <span className="">{currentForm === 3 ? <CheckOutlined className="color-white" /> : 2}</span>
              <span className="ml-2 only-web">Contact Details</span>
            </div>

            <div className={`${currentForm === 3 ? 'step-form-helper-current' : 'step-form-helper-inactive'}`}>
              <span className="">3</span>
              <span className="ml-2 only-web">Membership Type</span>
            </div>
          </div>
        </Card>

        <Card className="step-form col-7">
          <div className="only-web">
            <h2>About Your Company</h2>
            <p>Details about your business and its service category</p>
          </div>
          <div>
            { displayFormInfo(currentForm) }
          </div>
            {
              displayFormComponent(currentForm)
            }

            {}
        </Card>
      </div>
    </div>
  )
}
