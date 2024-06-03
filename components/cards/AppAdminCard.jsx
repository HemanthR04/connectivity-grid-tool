import React from 'react'

const AdminCard = (props) => {

    const { owners } = props;

    return (
        <>
            <div className=''>
               
                {
                    owners.map((user) => (
                        <div key={user.att_id} className='border-b-2 w-full flex m-2 justify-between items-center'>
                            <div className='flex'>
                                <div className='px-4 py-1'>{user.name}({user.att_id})</div>
                            </div>
                            <div className='px-4 py-1'>
                                {user.role}
                            </div>
                        </div>
                    ))
                }


            </div>

        </>
    )
}

export default AdminCard