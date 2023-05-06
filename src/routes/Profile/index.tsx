import { useState } from 'react'
import { Alert, Input, Select, Avatar, Button } from 'react-daisyui'
import { BiErrorCircle } from 'react-icons/bi'
import { useQuery } from 'react-query'
import { useAuth } from '~/context/AuthContext'
import defaultAvatar from '~/static/images/defaultAvatar.png'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

function Profile() {
  const { getProfile, updateProfile, profileUpdated, currentUser } = useAuth()
  const [submitEnabled, setSubmitEnabled] = useState(false)
  const [submitButton, setSubmitButton] = useState('Save')
  const [errorMsg, setErrorMsg] = useState('')
  const initialProfile = {
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    narrator: '',
    address: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    avatar: '',
  }
  const [profile, setProfile] = useState(initialProfile)
  const [image, setImage] = useState<any>()
  const [previewImage, setPreviewImage] = useState('')

  // set initial profile values

  useQuery(
    ['getProfile'],
    async () => {
      return await getProfile()
    },
    {
      onSuccess: (data) => {
        if (profile == initialProfile) {
          setProfile(data[0] || initialProfile)
          setPreviewImage(data[0]?.avatar || defaultAvatar)
        }
      },
    },
  )

  // update profile
  const handleProfileSaveClick = async () => {
    setSubmitEnabled(false)
    setSubmitButton('Saving...')
    let avatarUrl = profile?.avatar ?? ''

    if (image) {
      const storage = getStorage()
      const storageRef = ref(storage, `/users/${currentUser?.uid}/profile.png`)

      const uploadTask = await uploadBytes(storageRef, image)
      avatarUrl = await getDownloadURL(uploadTask.ref)
      setProfile({ ...profile, avatar: avatarUrl })
    }

    const [err] = await updateProfile({ ...profile, avatar: avatarUrl })
    if (err) {
      setErrorMsg(err.message)
      setSubmitEnabled(true)
      setSubmitButton('Save')
      return
    }
    setSubmitEnabled(false)
    setSubmitButton('Save')
    profileUpdated(true)
    setImage(null)
  }

  // handle input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const handleNarratorChange = (value: string) => {
    setProfile({ ...profile, narrator: value })
  }

  return (
    <>
      <div className="hero min-h-screen pt-24 pb-12">
        <div className="flex flex-wrap w-full xl:w-1/2 lg:w-2/3">
          <div className="w-full flex justify-center my-8">
            <label
              onChange={(e: any) => {
                setPreviewImage(URL.createObjectURL(e.target.files[0]))
                setImage(e.target.files[0])
              }}
              htmlFor="formId"
            >
              <input name="" type="file" id="formId" hidden />
              <Avatar
                className="cursor-pointer"
                src={previewImage}
                shape="circle"
                size={150}
                border
                borderColor="info"
              />
            </label>
          </div>
          <TextInput name="Firstname" onChange={handleInputChange} value={profile?.firstname} />
          <TextInput name="Lastname" onChange={handleInputChange} value={profile?.lastname} />
          <TextInput name="Email" onChange={handleInputChange} value={profile?.email} type="email" />

          <div className="form-control w-full md:w-1/2 px-2 py-1">
            <label className="label">
              <span className="label-text text-xl">Narrator :</span>
            </label>
            <Select
              className="text-sm"
              name="narrator"
              onChange={handleNarratorChange}
              defaultValue={profile?.narrator || 'rushing'}
            >
              <option key={'rushing'} value={'rushing'} selected={profile?.narrator == 'rushing'}>
                Dr.Rushing
              </option>
              <option key={'wright'} value={'wright'} selected={profile?.narrator == 'wright'}>
                Dr.Wright
              </option>
            </Select>
          </div>
          <TextInput name="Birthdate" onChange={handleInputChange} value={profile?.birthdate} type={'date'} />
          <TextInput name="Country" onChange={handleInputChange} value={profile?.country} />
          <TextInput name="Address1" onChange={handleInputChange} value={profile?.address1} />
          <TextInput name="Address2" onChange={handleInputChange} value={profile?.address2} />
          <TextInput name="City" onChange={handleInputChange} value={profile?.city} />
          <TextInput name="State" onChange={handleInputChange} value={profile?.state} />
          <TextInput name="Zipcode" onChange={handleInputChange} value={profile?.zipcode} />
          <TextInput name="Phone" onChange={handleInputChange} value={profile?.phone} />
          <div className="form-control w-full px-2 py-1">
            <Alert status="error" style={errorMsg ? {} : { visibility: 'hidden' }} icon={<BiErrorCircle />}>
              {errorMsg}
            </Alert>
            <Button
              type="button"
              className="w-full mt-11 text-xl text-white"
              color="info"
              onClick={handleProfileSaveClick}
              disabled={submitEnabled}
            >
              <span className="tracking-[.15em]">{submitButton}</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

function TextInput({ onChange, name, value, type = 'text', placeholder = '', readOnly = false }: any) {
  return (
    <div className="form-control w-full md:w-1/2 px-2 py-1">
      <label className="label">
        <span className="label-text text-xl">{name}</span>
      </label>
      <Input
        className="text-base"
        onChange={onChange}
        type={type}
        name={name.toLowerCase().replace(/\s+/g, '')}
        value={value}
      />
    </div>
  )
}

export default Profile
