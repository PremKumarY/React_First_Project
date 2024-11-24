import React from 'react';
import Header from '../others/Header';
import CreateTasklist from '../others/createTasklist';

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-7'>
            <Header />
           <CreateTasklist/>
        </div>

    )
}
export default AdminDashboard