"use client";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import MuiCard, { CardProps } from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { appConfig } from "@/configs/appConfig";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Input, { Label } from "@/@core/components/Input";
import Button from "@/@core/components/Button";
import { SignInOptions, signIn, signOut, useSession } from "next-auth/react";

interface State {
  password: string;
  showPassword: boolean;
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "36rem" },
}));

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(5),
  background: theme.palette.primary.light,
}));

const LoginPage = () => {
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });
  const router = useRouter();
  const { status } = useSession();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(status === "loading");
  }, [status]);

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const signinOptions: SignInOptions = {
      username: form.username.value,
      password: form.password.value,
      redirect: false,
    };
    setLoading(true);
    signIn("credentials", signinOptions)
      .then((res) => {
        if (res?.error) {
          signOut({ callbackUrl: "/" });
        }
        router.push("/dashboard/section");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(9)} !important` }}
        >
          <Box
            sx={{
              mb: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image alt={appConfig.appName} src={appConfig.appIconBlack} />
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
              Welcome to {appConfig.appName}! 👋🏻
            </Typography>
            <Typography variant="body2">
              Please sign-in to your account and start creating
            </Typography>
          </Box>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={5}>
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth>
                  <Label shrink htmlFor="username">
                    Username
                  </Label>
                  <Input
                    type="text"
                    size="medium"
                    fullWidth
                    name="username"
                    id="username"
                  />
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <FormControl variant="standard" fullWidth>
                  <Label shrink htmlFor="password">
                    Password
                  </Label>
                  <Input
                    size="medium"
                    value={values.password}
                    fullWidth
                    name="password"
                    id="password"
                    onChange={handleChange("password")}
                    type={values.showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            aria-label="toggle password visibility"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  size="large"
                  variant="contained"
                  loading={isLoading}
                  loadingPosition="start"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;
