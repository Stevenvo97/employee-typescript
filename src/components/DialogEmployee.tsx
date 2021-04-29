import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useStoreState, useStoreActions } from '../config/hooks';

type FormValues = {
  name: string;
  email: string;
  position: string;
};

const initForm = {
  name: '',
  email: '',
  position: '',
};

export default function DialogEmployee() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<FormValues>();

  const { open } = useStoreState((state) => state.dialogEmployee);
  const { setOpen } = useStoreActions((actions) => actions.dialogEmployee);
  const { addEmployee } = useStoreActions((actions) => actions.employee);
  const onSubmit = (data: FormValues) => {
    console.log(data);
    addEmployee({ name: data.name, email: data.email, position: data.position });
    reset(initForm);
  };
  const handleClose = () => {
    setOpen(false);
    reset(initForm);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
        <DialogContent>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                autoFocus
                defaultValue=""
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                error={Boolean(errors?.name)}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                defaultValue=""
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                {...field}
              />
            )}
          />

          <Controller
            name="position"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                defaultValue=""
                margin="dense"
                id="position"
                label="Position"
                type="text"
                fullWidth
                {...field}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
