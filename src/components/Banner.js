import React, { useState } from 'react';
import { Button, Input } from "antd";
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Banner = ({ publishPosts, createPost, searchPosts }) => {
    const [searchValue, setSearchValue] = useState("")

    return (<div class="container-fluid p-4 banner">
        <div class="d-flex align-items-center w-50">
            <Input
                placeholder="Search"
                size="large"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                prefix={<SearchOutlined onClick={() => searchPosts(searchValue)} />}
                suffix={<CloseCircleOutlined onClick={() => {
                    setSearchValue("")
                    searchPosts("")
                }} />}
                onPressEnter={() => searchPosts(searchValue)}
            />
        </div>
        <div class="d-flex align-items-center p-4">
            <Button type="primary" className="mr-4" shape="round" size="large" onClick={() => createPost()}>
                New Posts
            </Button>
            <Button shape="round" size="large" onClick={() => publishPosts()}>
                Published Posts
            </Button>
        </div>
    </div>);
}

export default Banner;