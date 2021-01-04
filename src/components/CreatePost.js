import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd';
import { addPost } from '../actions/index';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
};

const validateMessages = {
    required: '${label} is required!',
};

const CreatePost = ({ addPost }) => {

    const onFinish = values => {
        addPost(values?.post)
    };

    return (<div className="m-4">
        <h3 className="d-flex justify-content-center mb-4">Create New Post</h3>
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <Form.Item name={['post', 'title']} label="Title" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item
                name={['post', 'description']}
                label="Description"
                rules={[{ required: true }]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Publish
                </Button>
            </Form.Item>
        </Form>
    </div>);
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    addPost: addPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
