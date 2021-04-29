import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { useStoreState, useStoreActions } from '../config/hooks';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  position: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: !values.name ? {} : values,
    errors: !values.name
      ? {
          name: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};
export default function DialogEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const { open } = useStoreState((state) => state.dialogEmployee);
  const { setOpen } = useStoreActions((actions) => actions.dialogEmployee);
  const { addEmployee } = useStoreActions((actions) => actions.employee);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addEmployee({ name: data.name, email: data.email, position: data.position });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            {...register('name')}
            error={errors?.name ? true : false}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            {...register('email')}
          />
          <TextField
            margin="dense"
            id="position"
            label="Position"
            type="text"
            fullWidth
            {...register('position')}
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
