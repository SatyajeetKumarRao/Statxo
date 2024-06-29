import { Box, Select, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils/vars";

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { Skeleton } from "@chakra-ui/react";

import { AuthContext } from "../contexts/authContext";

const ActionType = [
  "Price-Negotiation",
  "Scrap",
  "Product ERP",
  "Price Non ERP",
];

const ActionName = [
  "Rebate",
  "Refund",
  "Price Increase",
  "Additional Task",
  "Price Decrease",
];

const StatxoData = () => {
  const toast = useToast();
  const { auth } = useContext(AuthContext);
  const [taskData, setTaskData] = useState([]);
  const fetchData = async () => {
    setIsLoaded(true);
    axios
      .get(`${BASE_URL}/tasks/task`)
      .then((response) => response.data)
      .then((responseData) => {
        console.log(responseData);
        setIsLoaded(false);
        setTaskData(responseData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeActionName = (task, value) => {
    if (!auth.isAuth) {
      toast({
        title: "Please login first",
        description: "modification not allowed",
        status: "error",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
    } else {
      const newTaskData = taskData.map((data) => {
        if (data._id == task._id) {
          data.ActionName = value;
        }
        return data;
      });

      const newUpdateData = { ...task, ActionName: value };

      setTaskData(newTaskData);

      const accessToken = sessionStorage.getItem("accessToken");

      axios
        .patch(`${BASE_URL}/tasks/update/${task._id}`, newUpdateData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => response.data)
        .then((responseData) => {
          console.log(responseData);
          toast({
            title: responseData?.message,
            status: "success",
            duration: 5000,
            position: "top-right",
            isClosable: true,
          });

          fetchData();
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: error.response.data?.message,
            status: "error",
            duration: 5000,
            position: "top-right",
            isClosable: true,
          });
        });
    }
  };

  const handleChangeActionType = (task, value) => {
    if (!auth.isAuth) {
      toast({
        title: "Please login first",
        description: "modification not allowed",
        status: "error",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
    } else {
      const newTaskData = taskData.map((data) => {
        if (data._id == task._id) {
          data.ActionType = value;
        }
        return data;
      });

      const newUpdateData = { ...task, ActionType: value };

      setTaskData(newTaskData);

      const accessToken = sessionStorage.getItem("accessToken");

      axios
        .patch(`${BASE_URL}/tasks/update/${task._id}`, newUpdateData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => response.data)
        .then((responseData) => {
          console.log(responseData);
          toast({
            title: responseData?.message,
            status: "success",
            duration: 5000,
            position: "top-right",
            isClosable: true,
          });

          fetchData();
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: error.response.data?.message,
            status: "error",
            duration: 5000,
            position: "top-right",
            isClosable: true,
          });
        });
    }
  };

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box textAlign={"center"} mt={16}>
      {isLoaded && (
        <Stack m={10}>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </Stack>
      )}
      <TableContainer maxH={"70vh"} overflowY={"scroll"}>
        <Table variant="simple" size={{ base: "sm", lg: "md" }}>
          <Thead position="sticky" top="0" bg="gray.100" zIndex={"docked"}>
            <Tr>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Amount</Th>
              <Th isNumeric>PostingYear</Th>
              <Th isNumeric>PostingMonth</Th>
              <Th w={"fit-content"}>ActionType</Th>
              <Th w={"fit-content"}>ActionName</Th>
              <Th>Status</Th>
              <Th>UserName (Edited By)</Th>
              <Th>EditedAt</Th>
            </Tr>
          </Thead>
          <Tbody>
            {taskData.length > 0 &&
              taskData.map((task) => {
                return (
                  <Tr key={task._id}>
                    <Td isNumeric>{task.Quantity}</Td>
                    <Td isNumeric> {task.Amount}</Td>
                    <Td isNumeric>{task.PostingYear}</Td>
                    <Td isNumeric>{task.PostingMonth}</Td>
                    <Td>
                      <Select
                        w={"200px"}
                        value={task.ActionType}
                        onChange={(e) => {
                          handleChangeActionType(task, e.target.value);
                        }}
                      >
                        {ActionType.map((actionType) => {
                          return (
                            <option key={actionType} value={actionType}>
                              {actionType}
                            </option>
                          );
                        })}
                      </Select>
                    </Td>
                    <Td>
                      <Select
                        w={"200px"}
                        value={task.ActionName}
                        onChange={(e) => {
                          handleChangeActionName(task, e.target.value);
                        }}
                      >
                        {ActionName.map((actionName) => {
                          return (
                            <option key={actionName} value={actionName}>
                              {actionName}
                            </option>
                          );
                        })}
                      </Select>
                    </Td>
                    <Td>{task.Status}</Td>
                    <Td>{task.UserName}</Td>
                    <Td maxW={"200px"}>{task.EditedAt}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export { StatxoData };
