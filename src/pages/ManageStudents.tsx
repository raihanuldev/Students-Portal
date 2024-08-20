import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetStudentsQuery } from "../redux/api/baseApi";

// Data-Types
interface DataType {
  key: React.Key;
  studentName: string;
  roll: number;
  address: string;
  department: string;
  phone: string;
}

const ManageStudents = () => {
  const { data: students, isFetching } = useGetStudentsQuery(undefined);

  const handleUpdate = (data: DataType) => {
    console.log(data);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Student Name",
      dataIndex: "studentName",
      sorter: (a, b) => a.studentName.length - b.studentName.length,
      sortDirections: ["descend"],
      onFilter: (value, record) =>
        record.studentName.indexOf(value as string) === 0,
    },
    {
      title: "Roll",
      dataIndex: "roll",
      sorter: (a, b) => a.roll - b.roll,
      defaultSortOrder: "descend",
    },
    {
      title: "Department",
      dataIndex: "department",
      filters: [
        { text: "Computer", value: "computer" },
        { text: "Electrical", value: "electrical" },
      ],
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      onFilter: (value, record) =>
        record.address.indexOf(value as string) === 0,
    },
    {
      title: "Action",
      render: (_, record) => (
        <Button type="primary" onClick={() => handleUpdate(record)}>
          Update
        </Button>
      ),
    },
  ];

  const tableData: DataType[] | undefined = students?.map(
    ({ _id, studentName, roll, department, phone, address }:any) => ({
      key: _id,
      studentName,
      roll,
      department,
      phone,
      address,
    })
  );

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      loading={isFetching}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default ManageStudents;
