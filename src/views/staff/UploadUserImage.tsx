import React from 'react'
import { Upload, Icon, Modal, message } from 'antd'
import styled from 'styled-components'
import { SERVER_URL } from '../../constants'

function getBase64(file: any) {
  return new window.Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const StyledUpload = styled(Upload)`
  .ant-upload {
    width: 200px;
    height: 200px;
  }

  .ant-upload-list-item {
    width: 200px;
    height: 200px;
  }
`

class UploadUserImage extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    })
  }

  handleChange = ({ file, fileList }: any) => {
    if (!file.status) return

    this.setState({ fileList })
  }

  beforeUpload(file: any) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }

    const isLt2M = file.size / 1024 / 1024 < 10
    if (!isLt2M) {
      message.error('Image must smaller than 10MB!')
    }

    return isJpgOrPng && isLt2M
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className="clearfix">
        <StyledUpload
          name="images"
          action={`${SERVER_URL}/staffs/upload-images`}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          multiple={true}
          beforeUpload={this.beforeUpload}
        >
          {fileList.length >= 10 ? null : uploadButton}
        </StyledUpload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}

export default UploadUserImage
