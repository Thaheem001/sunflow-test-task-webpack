import React from "react"
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Paper,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography
} from "@mui/material"
import UncheckedBoxIcon from "@assets/images/icon/unchecked-box.svg"
import CheckedBoxIcon from "@assets/images/icon/checked-box.svg"
import DeleteIcon from "@assets/images/icon/trash.svg"
import ArrowUpIcon from "@assets/images/icon/arrow-down.svg"

const Issues = () => {
  return (
    <>
      <Box component={"div"} className="createIssuePageWrapper">
        <Box component={"div"} className="leftNavBar"></Box>
        <Box component={"div"} className="rightCreateIssuePageContainer">
          <Box component={"div"} className="createIssueCardContainer">
            <Typography variant="h5">Create Issue</Typography>
            <Typography component="p">Last updated on 09.08.2023 04:03 am</Typography>
            <Box component={"div"} className="createIssueCardInputFields">
              <Grid container spacing={4}>
                <Grid item md={2.5}>
                  <TextField label="Title" variant="outlined" focused="true" />
                </Grid>
                <Grid item md={2.5}>
                  <FormControl focused="true" fullWidth>
                    <InputLabel>Priority</InputLabel>
                    <Select label="Priority" variant="outlined" />
                  </FormControl>
                </Grid>
                <Grid item md={2.5}>
                  <FormControl focused="true" fullWidth>
                    <InputLabel>DC Switch Status</InputLabel>
                    <Select label="DC Switch Status" variant="outlined" />
                  </FormControl>
                </Grid>
                <Grid item md={2.5}>
                  <FormControl focused="true" fullWidth>
                    <InputLabel>Status</InputLabel>
                    <Select label="Status" variant="outlined" />
                  </FormControl>
                </Grid>
                <Grid item md={1}>
                  <FormControlLabel control={<Switch defaultChecked />} label="Electrical" />
                </Grid>
                <Grid item md={5}>
                  <TextField label="Description" multiline rows={3} focused="true" />
                </Grid>
                <Grid item md={2.5}>
                  <TextField label="Repair Date" focused="true" />
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Repair Date" />
                    </LocalizationProvider> */}
                </Grid>
                <Grid item md={2.5}>
                  <TextField label="Time Estimate Hours" variant="outlined" focused="true" />
                </Grid>
                <Grid item md={1}>
                  <FormControlLabel control={<Switch />} label="Hub" focused="true" />
                </Grid>
              </Grid>
            </Box>

            <Box component={"div"} className="issueContactAssignFields">
              <Typography variant="h5">Issue Contact</Typography>
              <Grid container spacing={6}>
                <Grid item md={5}>
                  <FormControl focused="true" fullWidth>
                    <InputLabel>Select Role</InputLabel>
                    <Select label="Select Role" variant="outlined" />
                  </FormControl>
                </Grid>

                <Grid item md={5}>
                  <FormControl focused="true" fullWidth>
                    <InputLabel>Select User</InputLabel>
                    <Select label="Select User" variant="outlined" />
                  </FormControl>
                </Grid>

                <Grid item md={2}>
                  <Button
                    className="filledGradientBtn"
                    variant="contained"
                    disableTouchRipple={true}
                  >
                    ㅤㅤAssignㅤㅤ
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Box component={"div"} className="issueContactGrid">
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checkedIcon={<img src={CheckedBoxIcon} alt="checked" />}
                          icon={<img src={UncheckedBoxIcon} alt="unchecked" />}
                          className="UncheckedBoxIcon"
                          disableTouchRipple={true}
                        />
                      </TableCell>
                      <TableCell className="tableHeadItem">
                        <span>
                          Name
                          <img src={ArrowUpIcon} alt="sort" />
                        </span>
                      </TableCell>
                      <TableCell className="tableHeadItem">
                        <span>
                          Email
                          <img src={ArrowUpIcon} alt="sort" />
                        </span>
                      </TableCell>
                      <TableCell className="tableHeadItem">
                        <span>
                          Phone
                          <img src={ArrowUpIcon} alt="sort" />
                        </span>
                      </TableCell>
                      <TableCell className="tableHeadItem">
                        <span>
                          Role
                          <img src={ArrowUpIcon} alt="sort" />
                        </span>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className="tableBodyRow">
                      <TableCell padding="checkbox">
                        <Checkbox
                          checkedIcon={<img src={CheckedBoxIcon} alt="checked" />}
                          icon={<img src={UncheckedBoxIcon} alt="unchecked" />}
                          className="UncheckedBoxIcon"
                          disableTouchRipple={true}
                        />
                      </TableCell>
                      <TableCell>Joe Abraham</TableCell>
                      <TableCell>joe.braham@joeabraham.com</TableCell>
                      <TableCell>123-456-7890</TableCell>
                      <TableCell>Admin User</TableCell>
                      <TableCell>
                        <img src={DeleteIcon} alt="delete" />
                      </TableCell>
                    </TableRow>
                    <TableRow className="tableBodyRow">
                      <TableCell padding="checkbox">
                        <Checkbox
                          checkedIcon={<img src={CheckedBoxIcon} alt="checked" />}
                          icon={<img src={UncheckedBoxIcon} alt="unchecked" />}
                          className="UncheckedBoxIcon"
                          disableTouchRipple={true}
                        />
                      </TableCell>
                      <TableCell>Joe Abraham</TableCell>
                      <TableCell>joe.braham@joeabraham.com</TableCell>
                      <TableCell>123-456-7890</TableCell>
                      <TableCell>Admin User</TableCell>
                      <TableCell>
                        <img src={DeleteIcon} alt="delete" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <TablePagination
                rowsPerPageOptions={[2, 4, 6, 8]}
                component="div"
                count={1}
                rowsPerPage={2}
                page={0}
                onPageChange={() => {}}
                onRowsPerPageChange={() => {}}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Issues
