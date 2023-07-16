'use client'
import { useRef, useState } from 'react';
import { Text, Group, Button, createStyles, rem } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';
import Image from 'next/image';

const { pdf, png, gif, jpeg, svg, webp, avif } = MIME_TYPES;
const ACCEPTED_FILE_TYPES = [pdf, png, gif, jpeg, svg, webp, avif];

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: rem(30),
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  control: {
    position: 'absolute',
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-20),
  },
}));

export default function DropzoneButton() {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={(files) => {
          const file = files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
            const result = event.target?.result;
            if (typeof result === 'string') {
              setSelectedImage(result);
            }
          };
          reader.readAsDataURL(file);
        }}
        className={classes.dropzone}
        radius="md"
        accept={ACCEPTED_FILE_TYPES}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload
                size={rem(50)}
                color={theme.colors[theme.primaryColor][6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={rem(50)}
                color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>PDF or image file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>Upload resume</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            Drag & drop files here to upload. We can accept only <i>.pdf</i> or image files that
            are less than 30mb in size.
          </Text>
        </div>
      </Dropzone>

      <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
        Select files
      </Button>

      {selectedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <Image src={selectedImage} alt="Uploaded" className="w-50 h-50" />
        </div>
      )}
    </div>
  );
}
