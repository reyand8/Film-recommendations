import React from "react";
import {Form} from "react-final-form";
import Box from "@mui/material/Box";

import {
    SortDirectionField,
    SortField,
    SubmitField
} from "../components";


export const SortMenu = ({ onSubmit, initialValues}) => {
    return (
        <Form xs={12} sm={6} md={4} lg={3}
              onSubmit={onSubmit}
              initialValues={initialValues}
              render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <Box sx={{
                          display: 'flex',
                          flexDirection:  {xs: "column", md: "row"},
                          alignItems: {xs: "center"},
                      }}>
                          <Box sx={{
                              maxWidth: {xs: "240px", md: "250px"},
                              alignItems: 'center',
                              mr: {xs: 0, md: 4}}}>
                              <SortField/>
                          </Box>
                          <Box sx={{maxWidth: {xs: "60px", md: "220px"},
                              alignItems: 'center', mr: {xs: 0, md: 4}}}>
                            <SortDirectionField/>
                          </Box>
                          <Box>
                              <SubmitField/>
                          </Box>
                      </Box>
                  </form>
              )}
        />
    )
}