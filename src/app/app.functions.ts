import { AlertController, LoadingController, ToastController } from "@ionic/angular";

export const appShowLoading = async (
  loadingCtrl: LoadingController,
  message = 'Carregando...'
) => {
  const loading = await loadingCtrl.create({
    message: message
  });
  loading.present();

  return loading;
}

export const appCatchError = (
  alertCtrl: AlertController,
  message = 'Erro inesperado, tente novamente',
  header = 'Ocorreu um erro'
) => {
  return async (error?: any) => {

    switch (error) {
      default:
        console.log(error);
    }

    const alert = await alertCtrl.create({
      header,
      message,
      buttons: ['Ok']
    });

    alert.present();

    return alert;
  }
}