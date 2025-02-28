import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";


const Transactions = () => {
    const [dues, setDues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost/HOP/api/fetch_dues.php") // Replace with actual API URL
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched Dues Data:", JSON.stringify(data, null, 2));

                if (data.success && Array.isArray(data.dues)) {
                    setDues(data.dues);
                } else {
                    console.error("Unexpected API response:", data);
                    setError("Invalid data format from server");
                }

                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching dues:", error);
                setError("Failed to fetch dues records");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading dues records...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    const columns = [
        {
            name: "#ID",
            selector: (row) => row.member_id || "No ID",
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.fullname || "No Name",
            sortable: true,
        },
        {
            name: "Department",
            selector: (row) => row.department || "No Department",
            sortable: true,
        },
        {
            name: "Amount",
            selector: (row) => `¢${row.amount || "0.00"}`,
            sortable: true,
        },
        {
            name: "Date",
            selector: (row) => row.date_created || "No Date",
            sortable: true,
        },
        {
            name: "Status",
            cell: (row) => (
                row.status === "Paid" ? (
                    <div className="badge badge-success">Completed</div>
                ) : (
                    <div className="badge badge-danger">Unpaid</div>
                )
            ),
            sortable: true,
        },
    ];

    return (
        <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title mb-0">Transactions</p>
                        <div className="table-responsive">
                            <DataTable
                                columns={columns}
                                data={dues}
                                pagination
                                highlightOnHover
                                striped
                               
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;