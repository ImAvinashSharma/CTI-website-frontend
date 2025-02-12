import React,{ useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddOrgModal from '../../components/AddOrgModal';

export const OrganizationSelectorSection = ({ orgName, setOrgName, options }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(options);

  const loading = open && options.length === 0;

  const handleModalClose = (newOrg) => {
    if (newOrg) {
      setCurrentOptions([newOrg.name, ...currentOptions]);
    }
    setModalOpen(false);
  };

  return (
    <>
      <Grid item xs={12} sm={12}>
        <p>Which Organization?</p>
        <Autocomplete
          id="organization"
          style={{ width: '100%' }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionSelected={(option, value) => option === value }
          getOptionLabel={(option) => option}
          options={currentOptions}
          autoComplete
          loading={loading}
          value={orgName}
          onChange={(e, v) => setOrgName(v)}
          renderInput={(params) =>(
            <TextField {...params}
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          Don’t see your organization? Click <Link onClick={() => setModalOpen(true)}><b>here</b></Link> to add it.
        </Typography>
      </Grid>
      <AddOrgModal open={modalOpen} onClose={handleModalClose} />
    </>
  )
}

export const OrgNameSection = ({ setDisplayState,orgName,linkStyles }) => {
  const handleChangeOrg = () => {
    setDisplayState('')
  }
  return (
    <Grid container direction="row" alignItems="center" spacing={3} style={{ padding: '10px' }}>
      <Grid item>
        <Typography variant='body1'>Affliated Organization:</Typography>
      </Grid>
      {orgName ?
        <Grid item>
          <Typography variant='h3'>{orgName}</Typography>
        </Grid> : <Grid item style={{ paddingRight: '50px' }}>
          <Typography variant='h3'>Unaffliated</Typography>
        </Grid>}
      <Grid item>
        <Link id="change-org" component="button" variant='body1' onClick={handleChangeOrg} underline='always' style={linkStyles} >change</Link>
      </Grid>
    </Grid>
  )
}

export const OrgChange = ({ orgName, setOrgTags, changeValue, setDisplayState }) => {

  const handleChangeOrg = () => {
    if (changeValue === 'TopicTag') {
      setDisplayState('TopicTag')
    }
    else if (changeValue === 'GenerateTags') {
      setDisplayState('GenerateTags')
    }
    else if (changeValue === 'CopyPasteTags') {
      setDisplayState('CopyPasteTags')
    }
    else {
      setDisplayState('ProjectUrl')
    }
  }
  const handleSubmitOrg = () => {
    const topics = []
    if (orgName) {
      axios.get(`${process.env.REACT_APP_API_URL}/api/organizations/` + orgName,)
        .then(res => {
          let po = res.data.parent_organization
          if (res.data.org_tag !== "") {
            topics.push(res.data.org_tag)
          }
          while (po != null) {
            topics.push(po.org_tag)
            po = po.parent_organization
          }
          setOrgTags(topics)
        }).catch(e => {
          /*
           * This should store the error state.
           * Component should check for error state and resolve the correct response.
           */
          console.log(e);
        })
    }

    handleChangeOrg()
  }
  return (
    <Grid item xs={12} sm={12}>
      <Grid align='center' style={{ padding: '20px' }}><Button onClick={handleSubmitOrg} id='submitButton'>Submit Organization</Button></Grid>
    </Grid>
  )
}
