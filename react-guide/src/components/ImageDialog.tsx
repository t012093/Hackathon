import React from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  useTheme
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CloseIcon from '@mui/icons-material/Close';

interface ImageDialogProps {
  open: boolean;
  onClose: () => void;
  images: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  currentIndex: number;
  onNextImage: () => void;
  onPrevImage: () => void;
}

export const ImageDialog: React.FC<ImageDialogProps> = ({
  open,
  onClose,
  images,
  currentIndex,
  onNextImage,
  onPrevImage,
}) => {
  const theme = useTheme();
  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'background.paper',
          position: 'relative',
          minHeight: '80vh',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'white',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.7)',
          },
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: 0, position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={currentImage.image}
            alt={currentImage.title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '60vh',
              objectFit: 'contain',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              transform: 'translateY(-50%)',
              display: 'flex',
              justifyContent: 'space-between',
              px: 2,
            }}
          >
            <IconButton
              onClick={onPrevImage}
              disabled={currentIndex === 0}
              sx={{
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton
              onClick={onNextImage}
              disabled={currentIndex === images.length - 1}
              sx={{
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              width: '100%',
              p: 3,
              bgcolor: 'background.paper',
              borderTop: 1,
              borderColor: 'divider',
            }}
          >
            <Typography variant="h5" gutterBottom>
              {currentImage.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: 'pre-line',
                '& h3': {
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  mb: 1,
                  mt: 2,
                },
              }}
              dangerouslySetInnerHTML={{ __html: currentImage.description }}
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
