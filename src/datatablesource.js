export const userColumns = [
     { 
        field: 'id', 
        headerName: 'OrderID',
         width: 100 
        },
      { 
        field: 'institution', 
        headerName: 'Institutions', 
        width: 130 
    },
      { 
        field: 'biller', 
        headerName: 'Biller', 
        width: 130 
    },
      { 
        field: 'order', 
        headerName: 'Order', 
        width: 130 
    },
      {
         field: 'date', 
         headerName: 'Date', 
         width: 130 
        },
      {
         field: 'amount', 
         headerName: 'Amount', 
         width: 130 
        },
      { 
        field: 'status', 
        headerName: 'Status', 
        width: 160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}> {params.row.status}</div>
            )
        }

    },
]


//data
 export const userRows =[
        {
            id:12323,
            institution:'Access Bank',
            biller:'FRSC',
            order: 'Driver License',
            date: '24/07/2021',
            amount: 2349800,
            status: 'Pending'
        },
        {
            id:922323,
            institution:'Eco Bank',
            biller:'WAEC',
            order: 'National Id',
            date: '4/08/2021',
            amount: 9009800,
            status: 'Successful'
        },
        {
            id:229323,
            institution:'GTBank',
            biller:'PHCN',
            order: 'Electricity Bill',
            date: '2/09/2021',
            amount: 49800,
            status: 'Failed'
        },
        {
            id:832323,
            institution:'First Bank',
            biller:'OAU',
            order: 'School Fee',
            date: '24/07/2021',
            amount: 5649800,
            status: 'Pending'
        },
        {
            id:219023,
            institution:'Polaris Bank',
            biller:'NECO',
            order: 'School form',
            date: '03/03/2021',
            amount: 27409800,
            status: 'Successful'
        },
        {
            id:900323,
            institution:'Unity Bank',
            biller:'Tax',
            order: 'Driver License',
            date: '30/01/2021',
            amount: 339800,
            status: 'Failed'
        },
        {
            id:505090,
            institution:'Zenith Bank',
            biller:'Hospital Bill',
            order: 'Voters Card',
            date: '14/08/2021',
            amount: 2349800,
            status: 'Pending'
        },
    ];