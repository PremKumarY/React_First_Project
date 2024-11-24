import React from 'react';
import Header from '../others/Header';

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-10'>
            <Header />
            <div>
                <form className='flex w-full items-start bg-red-300  justify-between'>
                    <div>
                        <h3>Task</h3>
                        <input type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3>Desciption</h3>
                        <textarea name="" id="" cols='30' rows='10' placeholder='Desciption....' ></textarea>
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input type="date" />
                    </div>
                    <div>
                        <h3>Assign to"</h3>
                        <input type="text" placeholder='employee' />
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input type="text" placeholder='design, dev, etc' />
                    </div>

                    <button>Create Task</button>
                </form>
            </div>
        </div>

    )
}
export default AdminDashboard